# Intermediate Value Theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** RA-01  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For continuous $f:[a,b]\to\mathbb R$, $a<b$, prove that every $y$ between $f(a)$ and $f(b)$ equals $f(c)$ for some $c\in[a,b]$.

**Foundations and permitted imports:**

Use the least-upper-bound property of R and epsilon–delta continuity. A continuous function at c preserves a strict sign on a sufficiently small relative neighborhood. No intermediate-value or root-existence theorem is imported.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Sign reduction and endpoints
N2 [v1] Exclude a negative value at c
  N1 -- E1: A supremum candidate c for the strict-sign case. --> N2
N3 [v1] Exclude a positive value at c
  N1 -- E1: A supremum candidate c for the strict-sign case. --> N3
  N2 -- E2: c<b and g(c)≥0. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | A supremum candidate c for the strict-sign case. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T1-3 | N1/v1, E1 | A supremum candidate c for the strict-sign case. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | c<b and g(c)≥0. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Sign reduction and endpoints

**Object, role, and local target:** Translate and possibly reverse the sign. The required export is: A supremum candidate c for the strict-sign case.

**Inputs:** Continuous f on[a,b]; y between endpoint values; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `RA-01.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Continuous f on[a,b]; y between endpoint values; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Translate and possibly reverse the sign. |
| Sense | Endpoint equalities must be closed before assuming strict signs. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** A supremum candidate c for the strict-sign case. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Exclude a negative value at c

**Object, role, and local target:** A negative value would allow a larger point in S. The required export is: c<b and g(c)≥0.

**Inputs:** Supremum candidate; continuity; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `RA-01.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Supremum candidate; continuity; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | A negative value would allow a larger point in S. |
| Sense | Use the endpoint sign to ensure there is room to the right. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** c<b and g(c)≥0. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Exclude a positive value at c

**Object, role, and local target:** Approximate the supremum from below. The required export is: Every intermediate endpoint value is attained.

**Inputs:** Supremum and nonempty strict-negative neighborhood of a; prior exports E1/v1, E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `RA-01.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Supremum and nonempty strict-negative neighborhood of a; prior exports E1/v1, E2/v1; keep their assumptions and versions attached. |
| Intellect | Approximate the supremum from below. |
| Sense | Being a supremum alone does not imply belonging to S. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Every intermediate endpoint value is attained. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Sign reduction and endpoints

1. If y=f(a) or f(b), the corresponding endpoint solves the problem.

2. Otherwise put g=f−y and, if necessary, replace g by−g so g(a)<0<g(b).

3. Define S={x∈[a,b]:g(x)<0}.

4. It contains a and is bounded above by b, hence c=supS exists.

### §4.N2 — Exclude a negative value at c

1. Continuity at b and g(b)>0 give a relative neighborhood of b with positive g, so c<b.

2. If g(c)<0, continuity gives δ>0 with g negative near c.

3. Choose x with c<x<min(b,c+δ), so x∈S contradicting the upper-bound property.

4. Thus g(c)≥0.

### §4.N3 — Exclude a positive value at c

1. Continuity at a gives some points strictly greater than a in S, so c>a.

2. If g(c)>0, g is positive on(c−δ,c+δ)∩[a,b].

3. By the defining property of supremum there is s∈S with c−δ<s≤c, a contradiction.

4. Hence g(c)≤0.

5. Together the inequalities force g(c)=0; undoing the sign reduction gives f(c)=y.

## 5. Worked instance and boundary audit

For f(x)=x³−x−1, f(1)=−1 and f(2)=5. The supremum construction yields a root in(1,2). Bisection checks f(1.25)=−0.296875 and f(1.5)=0.875, narrowing the interval; these computations illustrate the theorem but are not its universal proof.

**Boundary or failed-argument audit:**

The jump g(x)=−1 for x<0 and 1 for x≥0 on[−1,1] has both signs and misses0. At its supremum candidate continuity fails. Sense rejects the sign-preservation step; no bracket computation repairs the original discontinuous theorem.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `RA-01`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
