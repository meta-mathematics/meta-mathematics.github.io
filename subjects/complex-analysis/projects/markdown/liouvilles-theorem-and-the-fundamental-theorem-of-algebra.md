# Liouville’s Theorem and the Fundamental Theorem of Algebra

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** CA-02  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

Prove every bounded entire function is constant. Deduce that every nonconstant complex polynomial has a complex root.

**Foundations and permitted imports:**

Import CA-01 and differentiation under its contour integral on a disk: f′(z₀)=(2πi)⁻¹∮f(z)/(z−z₀)² dz. The differentiation is justified by a locally uniform denominator bound away from the contour. Use connectedness of C and polynomial leading-term estimates; do not import root existence. Also use the real mean value theorem on a line segment and the extreme value theorem for continuous real functions on compact disks.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Cauchy derivative estimate
N2 [v1] Liouville closure
  N1 -- E1: Every derivative of order1 vanishes. --> N2
N3 [v1] Polynomial root contradiction
  N2 -- E2: Every bounded entire function is constant. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | Every derivative of order1 vanishes. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | Every bounded entire function is constant. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Cauchy derivative estimate

**Object, role, and local target:** Let a contour radius grow while the bound stays fixed. The required export is: Every derivative of order1 vanishes.

**Inputs:** Entire f with |f|≤M globally; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `CA-02.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Entire f with |f|≤M globally; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Let a contour radius grow while the bound stays fixed. |
| Sense | A bound depending on R cannot be sent to infinity this way. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** Every derivative of order1 vanishes. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Liouville closure

**Object, role, and local target:** Use the connected domain to obtain one constant. The required export is: Every bounded entire function is constant.

**Inputs:** Derivative zero everywhere; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `CA-02.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Derivative zero everywhere; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Use the connected domain to obtain one constant. |
| Sense | Zero derivative on a disconnected domain only gives componentwise constancy. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** Every bounded entire function is constant. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Polynomial root contradiction

**Object, role, and local target:** Apply Liouville to a hypothetical entire reciprocal. The required export is: Every nonconstant complex polynomial has a complex root.

**Inputs:** Nonconstant p of degree d with leading coefficient a_d≠0; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `CA-02.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Nonconstant p of degree d with leading coefficient a_d≠0; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Apply Liouville to a hypothetical entire reciprocal. |
| Sense | Bound the reciprocal on the compact interior as well as at infinity. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Every nonconstant complex polynomial has a complex root. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Cauchy derivative estimate

1. For any z₀ and R>0 the differentiated formula applies on the disk about z₀.

2. Its length2πR and denominator modulusR² give |f′(z₀)|≤M/R.

3. The same M holds for every radius since f is globally bounded.

4. Let R→∞; f′(z₀)=0 for every z₀.

### §4.N2 — Liouville closure

1. For any z,w, consider t↦f(z+t(w−z)) on[0,1].

2. Its real parameter derivative is f′(z+t(w−z))(w−z)=0; real and imaginary parts are constant by the real mean value theorem.

3. Thus f(w)=f(z).

4. This proves Liouville’s theorem on C.

### §4.N3 — Polynomial root contradiction

1. Assume p has no zero.

2. Then1/p is entire.

3. Choose R so for |z|≥R the sum of lower-degree terms is at most |a_d||z|^d/2.

4. Thus |p(z)|≥|a_d||z|^d/2 and |1/p(z)|≤2/(|a_d|R^d) outside.

5. On the closed radius-R disk continuity and nonvanishing give a positive minimum of|p|, hence a finite reciprocal bound.

6. Liouville makes1/p constant, whereas it tends to 0 at infinity and is nowhere zero, contradiction.

7. Therefore p has a root.

## 5. Worked instance and boundary audit

The entire function e^z is nonconstant and is unbounded along positive real z, consistent with Liouville. For p=z²+1, the root-existence conclusion holds and the explicit factors(z−i)(z+i) illustrate it.

**Boundary or failed-argument audit:**

The function1/z is bounded on{|z|≥1} but has a pole at 0, so it is not a counterexample to Liouville. Sense identifies the missing entire-domain condition; a bounded function on the unit disk can also be nonconstant.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `CA-02`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [Harvard complex analysis: Cauchy formula, argument principle, and Riemann mapping lectures](https://people.math.harvard.edu/~siu/math113/).

[Branch index](../README.md)
