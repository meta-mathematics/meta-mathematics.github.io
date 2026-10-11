# Classification of primitive Pythagorean triples

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** NT-05  
**Level:** Intermediate to advanced    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

Prove that every positive primitive integer solution of $a^2+b^2=c^2$, after exchanging $a,b$ if necessary, has the form

$$a=m^2-n^2,\qquad b=2mn,\qquad c=m^2+n^2,$$

where $m>n\ge1$, $\gcd(m,n)=1$, and $m,n$ have opposite parity. Prove the converse as well.

**Foundations and permitted imports:**

Use gcd/Bézout facts, Euclid’s lemma, and prime-exponent uniqueness from NT-02. A primitive positive triple means gcd(a,b,c)=1. A prime dividing two entries divides the third by the square equation, so primitiveness implies pairwise coprimality.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Parity and pairwise coprimality
N2 [v1] Coprime square factors
  N1 -- E1: b is even; a,c odd; all pairs coprime. --> N2
N3 [v1] Recover necessary parameters
  N1 -- E1: b is even; a,c odd; all pairs coprime. --> N3
  N2 -- E2: u=m², v=n² with coprime positive m>n. --> N3
N4 [v1] Converse and classification
  N3 -- E3: Forward parametrization with gcd(m,n)=1 and opposite parity. --> N4
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | b is even; a,c odd; all pairs coprime. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T1-3 | N1/v1, E1 | b is even; a,c odd; all pairs coprime. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | u=m², v=n² with coprime positive m>n. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |
| T3-4 | N3/v1, E3 | Forward parametrization with gcd(m,n)=1 and opposite parity. | N4.1 | N4 inputs below; same theorem objects and assumptions | Proof §4.N3 |

## 3. Node roles and faculty activities

### N1/v1 — Parity and pairwise coprimality

**Object, role, and local target:** Use squares modulo4 and prime divisibility. The required export is: b is even; a,c odd; all pairs coprime.

**Inputs:** Positive primitive a²+b²=c²; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-05.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Positive primitive a²+b²=c²; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Use squares modulo4 and prime divisibility. |
| Sense | Renaming the legs is part of the classification convention. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** b is even; a,c odd; all pairs coprime. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Coprime square factors

**Object, role, and local target:** Factor half-sums rather than introduce square roots prematurely. The required export is: u=m², v=n² with coprime positive m>n.

**Inputs:** Parity and equation; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-05.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Parity and equation; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Factor half-sums rather than introduce square roots prematurely. |
| Sense | A square product alone does not make factors squares: 2·8=16. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** u=m², v=n² with coprime positive m>n. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Recover necessary parameters

**Object, role, and local target:** Recombine sums, differences, and parity. The required export is: Forward parametrization with gcd(m,n)=1 and opposite parity.

**Inputs:** Coprime square factors; prior exports E1/v1, E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-05.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Coprime square factors; prior exports E1/v1, E2/v1; keep their assumptions and versions attached. |
| Intellect | Recombine sums, differences, and parity. |
| Sense | Include all parameter conditions, not just the polynomial identity. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Forward parametrization with gcd(m,n)=1 and opposite parity. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

### N4/v1 — Converse and classification

**Object, role, and local target:** Check identity and primitivity independently. The required export is: All and only primitive positive triples arise from these parameters.

**Inputs:** m>n≥1 coprime, opposite parity; prior exports E3/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-05.N4`; publish E4 only after the stated local target is established. |
| Memory | Retain m>n≥1 coprime, opposite parity; prior exports E3/v1; keep their assumptions and versions attached. |
| Intellect | Check identity and primitivity independently. |
| Sense | The converse must prove primitivity, not merely the identity. |
| Action | Execute the numbered mathematical activities in §4.N4, including its displayed identities and logical implications. |

**Export E4/v1:** All and only primitive positive triples arise from these parameters. Evidence is the authored argument in §4.N4, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N4 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E4, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E4. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Parity and pairwise coprimality

1. Both legs cannot be even, since c would also be even.

2. Both cannot be odd, since their squared sum is 2 modulo4 whereas a square is 0 or1.

3. Thus exactly one leg is even; rename it b.

4. Then a,c are odd.

5. Any prime dividing two entries divides the square of the third and hence the third; pairwise gcds are1.

### §4.N2 — Coprime square factors

1. Put u=(c+a)/2 and v=(c−a)/2.

2. Positivity gives u>v>0, integrality follows from parity, and uv=(b/2)².

3. A common divisor of u,v divides c=u+v and a=u−v, hence equals1.

4. In a coprime product every prime occurs in at most one factor.

5. Since uv is a square, uniqueness of factorization forces all exponents in u and v even.

6. Hence u=m²,v=n² for positive m>n, with gcd(m,n)=1.

### §4.N3 — Recover necessary parameters

1. The equations yield a=m²−n²,c=m²+n², and b=2mn, the positive square root.

2. If m,n were both odd then a,c would be even, contradicting their oddness; both even is excluded by coprimality.

3. Thus they have opposite parity.

4. This proves every primitive triple lies in the stated family.

### §4.N4 — Converse and classification

1. Expanding gives (m²−n²)²+(2mn)²=(m²+n²)², with positive entries.

2. No odd prime can divide both m²−n² and 2mn: it would divide m or n and then the other, contrary to gcd1.

3. The odd leg m²−n² rules out common factor2.

4. Hence the two legs are coprime and the triple is primitive.

5. Forward and converse establish exactly the claimed classification up to exchanging legs.

## 5. Worked instance and boundary audit

For (a,b,c)=(5,12,13), u=9,v=4 give m=3,n=2. Conversely m=4,n=1 gives(15,8,17). Using m=3,n=1 gives(8,6,10), a nonprimitive triple, showing why opposite parity is required.

**Boundary or failed-argument audit:**

A candidate node infers “u andv are squares” from uv square without checking gcd. Sense supplies2·8=16; restore coprimality, then apply prime-exponent parity. Recheck the parameter recovery and converse after revising this export.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `NT-05`, version 1, and the proof with every reuse. Intermediate exports E1–E4 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
