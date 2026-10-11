# Fermat's little theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** NT-04  
**Level:** Intermediate    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a prime $p$ and an integer $a$, prove

$$a^p\equiv a\pmod p.$$

Prove the equivalent nonzero-residue formulation: if $p\nmid a$, then $a^{p-1}\equiv1\pmod p$.

**Foundations and permitted imports:**

Use Bézout’s modular inverse criterion from NT-01 and Euclid’s lemma. Arithmetic occurs in Z/pZ for prime p; its nonzero residues are invertible. The finite product argument below proves the claim, rather than importing a group-order theorem.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Permutation of nonzero residues
N2 [v1] Product identity and cancellation
  N1 -- E1: The list a,2a,…,(p−1)a permutes the nonzero residue classes. --> N2
N3 [v1] Universal formulation
  N2 -- E2: For p∤a, a^{p−1}≡1 modp. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | The list a,2a,…,(p−1)a permutes the nonzero residue classes. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | For p∤a, a^{p−1}≡1 modp. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Permutation of nonzero residues

**Object, role, and local target:** Audit cancellation through an explicit inverse. The required export is: The list a,2a,…,(p−1)a permutes the nonzero residue classes.

**Inputs:** p prime and p∤a; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-04.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain p prime and p∤a; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Audit cancellation through an explicit inverse. |
| Sense | An inverse exists only for a nonzero class modulo the prime. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** The list a,2a,…,(p−1)a permutes the nonzero residue classes. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Product identity and cancellation

**Object, role, and local target:** Compare products then cancel with a certified unit. The required export is: For p∤a, a^{p−1}≡1 modp.

**Inputs:** Permutation; invertibility of every factor; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-04.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Permutation; invertibility of every factor; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Compare products then cancel with a certified unit. |
| Sense | Do not cancel a factorial modulo a composite without a unit certificate. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** For p∤a, a^{p−1}≡1 modp. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Universal formulation

**Object, role, and local target:** Separate cases rather than divide by a universally. The required export is: a^p≡a for every integer a; equivalent nonzero-residue form.

**Inputs:** Nonzero case and zero residue; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-04.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Nonzero case and zero residue; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Separate cases rather than divide by a universally. |
| Sense | The nonzero-residue conclusion cannot include a multiple of p. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** a^p≡a for every integer a; equivalent nonzero-residue form. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Permutation of nonzero residues

1. Multiplication by a maps the nonzero classes 1,…,p−1 to nonzero classes: if p|aj, Euclid’s lemma gives p|j, impossible.

2. If aj≡ak modp, multiply by the inverse of a to obtain j≡k.

3. The finite map is injective and hence bijective.

### §4.N2 — Product identity and cancellation

1. Equality of products of the same classes gives a^{p−1}(p−1)!≡(p−1)! modp.

2. No factor j from 1 to p−1 is divisible by p; repeated Euclid’s lemma implies p∤(p−1)!.

3. Its inverse exists, so multiplication by that inverse yields a^{p−1}≡1.

4. This also covers p=2, whose product is 1.

### §4.N3 — Universal formulation

1. If p∤a multiply the previous congruence by a to get a^p≡a.

2. If p|a both a and a^p are zero modulo p.

3. Conversely, for nonzero a, multiply a^p≡a by the inverse of a to recover the stronger nonzero formulation.

4. Negative integers are covered by their residue classes.

## 5. Worked instance and boundary audit

For a=3,p=7 the multiplied list is 3,6,2,5,1,4 mod7, a permutation. The theorem gives 3⁶=729≡1 mod7 and 3⁷≡3. For a=14,p=7 the universal congruence is 0≡0, while the nonzero formulation is inapplicable.

**Boundary or failed-argument audit:**

A proposed extension to modulus4 fails at a=2: 2⁴≡0≠2. Sense returns this witness; restore primality. A separate Euler theorem would instead require coprimality and exponent φ(m), not m−1.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `NT-04`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
